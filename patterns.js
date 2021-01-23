// returns the value of the first pattern in patterns that is found in the stream
function either(stream, ...patterns) {
  for (let pattern of patterns) {
    const value = pattern(stream)
    if (value) return value
  }
}

// returns the value of pattern if it terminates the stream
function final(stream, pattern) {
  if (stream.done()) return
  stream.save()
  const p = pattern(stream)
  if (p && stream.done()) return p
  else return stream.load()
}

export {either, final}