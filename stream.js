// converts a TAO tree to a TAO stream
function Stream(tree) {
  const [tag, values] = tree
  if (tag !== 'tao') throw Error(`Invalid tag: ${tag}`)

  let position = 0
  let saved = undefined
  const {length} = values

  const stream = {
    done() { return position >= length },
    at(tag, pred = () => true) {
      if (stream.done()) return false
      const value = values[position]
      return value[0] === tag && pred(value[1]) 
    },
    next() { return values[position++][1] },
    save() { saved = position },
    load() { position = saved },
    error(name) { throw Error(`ERROR: malformed ${name} at ${position} ${JSON.stringify(values.slice(position))}.`) },
  }
  return stream
}

export {Stream}