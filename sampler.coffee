lines = require './node_modules/lines-js/lib/lines.js'

eye = lines()
  .box
    from: [0, 0]
    to: [16, 9]
    style: 'double'
  .line
    from: [2, 0]
    to: [2, 9]
  .line
    from: [0, 1]
    to: [16, 1]
  .line
    from: [0, 8]
    to: [16, 8]
    style: 'bold'
  .line
    from: [14, 9]
    to: [14, 0]
    style: 'bold'
  .line
    from: [14, 2]
    to: [2, 2]
    style: 'bold'
  .line
    from: [4, 2]
    to: [4, 8]
    style: 'bold'
  .line
    from: [4, 7]
    to: [14, 7]
  .line
    from: [12, 7]
    to: [12, 2]
  .line
    from: [12, 3]
    to: [4, 3]
    style: 'double'
  .line
    from: [6, 3]
    to: [6, 7]
    style: 'double'
  .line
    from: [6, 6]
    to: [12, 6]
    style: 'bold'
  .line
    from: [10, 6]
    to: [10, 3]
    style: 'bold'
  .line
    from: [10, 4]
    to: [6, 4]
  .line
    from: [8, 4]
    to: [8, 6]
  .line
    from: [8, 5]
    to: [10, 5]
    style: 'double'

console.log eye.toString()

boxes = lines()
  .box
    from: [0, 0]
    to: [40, 3]
  .box
    from: [1, 1]
    to: [41, 4]
    style: 'bold'
  .box
    from: [2, 2]
    to: [42, 5]
    style: 'double'

  .line
    from: [6, 0]
    to: [6, 3]
  .line
    from: [9, 1]
    to: [9, 4]
  .line
    from: [12, 2]
    to: [12, 5]

  .line
    from: [18, 0]
    to: [18, 3]
    style: 'bold'
  .line
    from: [21, 1]
    to: [21, 4]
    style: 'bold'
  .line
    from: [24, 2]
    to: [24, 5]
    style: 'bold'

  .line
    from: [30, 0]
    to: [30, 3]
    style: 'double'
  .line
    from: [33, 1]
    to: [33, 4]
    style: 'double'
  .line
    from: [36, 2]
    to: [36, 5]
    style: 'double'

console.log boxes.toString()

squares = lines()
  .box
    from: [0, 0]
    to: [4, 2]
  .box
    from: [8, 4]
    to: [12, 6]
    style: 'bold'
  .box
    from: [16, 8]
    to: [20, 10]
    style: 'double'

  .line
    from: [8, 0]
    to: [8, 2]
  .line
    from: [12, 0]
    to: [12, 2]
  .line
    from: [16, 0]
    to: [16, 2]
  .line
    from: [20, 0]
    to: [20, 2]

  .line
    from: [0, 4]
    to: [4, 4]
  .line
    from: [0, 6]
    to: [4, 6]
  .line
    from: [0, 8]
    to: [4, 8]
  .line
    from: [0, 10]
    to: [4, 10]

  .line
    from: [8, 0]
    to: [12, 0]
    style: 'bold'
  .line
    from: [8, 2]
    to: [12, 2]
    style: 'bold'
  .line
    from: [8, 8]
    to: [12, 8]
    style: 'bold'
  .line
    from: [8, 10]
    to: [12, 10]
    style: 'bold'

  .line
    from: [0, 4]
    to: [0, 6]
    style: 'bold'
  .line
    from: [4, 4]
    to: [4, 6]
    style: 'bold'
  .line
    from: [16, 4]
    to: [16, 6]
    style: 'bold'
  .line
    from: [20, 4]
    to: [20, 6]
    style: 'bold'

  .line
    from: [16, 0]
    to: [20, 0]
    style: 'double'
  .line
    from: [16, 2]
    to: [20, 2]
    style: 'double'
  .line
    from: [16, 4]
    to: [20, 4]
    style: 'double'
  .line
    from: [16, 6]
    to: [20, 6]
    style: 'double'

  .line
    from: [0, 8]
    to: [0, 10]
    style: 'double'
  .line
    from: [4, 8]
    to: [4, 10]
    style: 'double'
  .line
    from: [8, 8]
    to: [8, 10]
    style: 'double'
  .line
    from: [12, 8]
    to: [12, 10]
    style: 'double'

console.log squares.toString()

hashes = lines()
  .line
    from: [2, 0]
    to: [2, 3]
  .line
    from: [4, 0]
    to: [4, 3]
  .line
    from: [0, 1]
    to: [6, 1]
  .line
    from: [0, 2]
    to: [6, 2]
  .box
    from: [2, 1]
    to: [4, 2]
    style: 'bold'

  .line
    from: [10, 0]
    to: [10, 3]
  .line
    from: [12, 0]
    to: [12, 3]
  .line
    from: [8, 1]
    to: [14, 1]
  .line
    from: [8, 2]
    to: [14, 2]
  .line
    from: [10, 1]
    to: [10, 2]
    style: 'bold'
  .line
    from: [12, 1]
    to: [12, 2]
    style: 'bold'

  .line
    from: [18, 0]
    to: [18, 3]
  .line
    from: [20, 0]
    to: [20, 3]
  .line
    from: [16, 1]
    to: [22, 1]
  .line
    from: [16, 2]
    to: [22, 2]
  .line
    from: [18, 1]
    to: [20, 1]
    style: 'bold'
  .line
    from: [18, 2]
    to: [20, 2]
    style: 'bold'

  .line
    from: [2, 4]
    to: [2, 7]
    style: 'bold'
  .line
    from: [4, 4]
    to: [4, 7]
    style: 'bold'
  .line
    from: [0, 5]
    to: [6, 5]
    style: 'bold'
  .line
    from: [0, 6]
    to: [6, 6]
    style: 'bold'
  .box
    from: [2, 5]
    to: [4, 6]

  .line
    from: [10, 4]
    to: [10, 7]
    style: 'bold'
  .line
    from: [12, 4]
    to: [12, 7]
    style: 'bold'
  .line
    from: [8, 5]
    to: [14, 5]
    style: 'bold'
  .line
    from: [8, 6]
    to: [14, 6]
    style: 'bold'
  .line
    from: [10, 5]
    to: [10, 6]
  .line
    from: [12, 5]
    to: [12, 6]

  .line
    from: [18, 4]
    to: [18, 7]
    style: 'bold'
  .line
    from: [20, 4]
    to: [20, 7]
    style: 'bold'
  .line
    from: [16, 5]
    to: [22, 5]
    style: 'bold'
  .line
    from: [16, 6]
    to: [22, 6]
    style: 'bold'
  .line
    from: [18, 5]
    to: [20, 5]
  .line
    from: [18, 6]
    to: [20, 6]

console.log hashes.toString()

dna = lines()
  .line
    from: [0, 0]
    to: [0, 6]
  .line
    from: [4, 0]
    to: [4, 6]
  .line
    from: [6, 0]
    to: [6, 6]
  .line
    from: [10, 0]
    to: [10, 6]
  .line
    from: [12, 0]
    to: [12, 6]
  .line
    from: [16, 0]
    to: [16, 6]

  .line
    from: [0, 1]
    to: [2, 1]
  .line
    from: [6, 1]
    to: [8, 1]
  .line
    from: [12, 1]
    to: [14, 1]
  .line
    from: [2, 1]
    to: [4, 1]
  .line
    from: [2, 3]
    to: [4, 3]
  .line
    from: [2, 5]
    to: [4, 5]

  .line
    from: [0, 3]
    to: [2, 3]
    style: 'bold'
  .line
    from: [6, 3]
    to: [8, 3]
    style: 'bold'
  .line
    from: [12, 3]
    to: [14, 3]
    style: 'bold'
  .line
    from: [8, 1]
    to: [10, 1]
    style: 'bold'
  .line
    from: [8, 3]
    to: [10, 3]
    style: 'bold'
  .line
    from: [8, 5]
    to: [10, 5]
    style: 'bold'

  .line
    from: [0, 5]
    to: [2, 5]
    style: 'double'
  .line
    from: [6, 5]
    to: [8, 5]
    style: 'double'
  .line
    from: [12, 5]
    to: [14, 5]
    style: 'double'
  .line
    from: [14, 1]
    to: [16, 1]
    style: 'double'
  .line
    from: [14, 3]
    to: [16, 3]
    style: 'double'
  .line
    from: [14, 5]
    to: [16, 5]
    style: 'double'

console.log dna.toString()


rounded = lines()
  .box
    from: [0, 0]
    to: [10, 5]
    style: 'rounded'
  .box
    from: [2, 1]
    to: [8, 4]
    style: 'rounded'
  .box
    from: [4, 2]
    to: [6, 3]
    style: 'rounded'

console.log rounded.toString()


split = lines()

# outer frame
  .line
    from: [0, 0]
    to: [8, 0]
  .line
    from: [0, 6]
    to: [8, 6]
  .line
    from: [0, 0]
    to: [0, 6]
    style: "bold"
  .line
    from: [8, 0]
    to: [8, 6]
    style: "bold"

# split
  .line
    from: [0, 3]
    to: [8, 3]
    style: "bold"

# upper panes
  .line
    from: [2, 0]
    to: [2, 3]
  .line
    from: [4, 0]
    to: [4, 3]
  .line
    from: [6, 0]
    to: [6, 3]

console.log split.toString()

traditional = lines()

# main casement
  .box
    from: [6, 0]
    to: [32, 13]
    style: 'bold'
  .box
    from: [7, 1]
    to: [31, 12]
  .line
    from: [7, 12]
    to: [31, 12]
    style: 'bold'
  .line
    from: [19, 1]
    to: [19, 12]
    style: 'bold'

# left window
  .box
    from: [9, 2]
    to: [13, 11]
  .box
    from: [13, 2]
    to: [17, 11]

  .line
    from: [9, 5]
    to: [17, 5]
  .line
    from: [9, 8]
    to: [17, 8]

# right window
  .box
    from: [21, 2]
    to: [25, 11]
  .box
    from: [25, 2]
    to: [29, 11]

  .line
    from: [21, 5]
    to: [29, 5]
  .line
    from: [21, 8]
    to: [29, 8]

# left shutter
  .box
    from: [0, 1]
    to: [6, 11]
  .box
    from: [1, 2]
    to: [5, 10]
    style: 'bold'

  .line
    from: [1, 4]
    to: [5, 4]
  .line
    from: [1, 6]
    to: [5, 6]
  .line
    from: [1, 8]
    to: [5, 8]

# right shutter
  .box
    from: [32, 1]
    to: [38, 11]
  .box
    from: [33, 2]
    to: [37, 10]
    style: 'bold'

  .line
    from: [33, 4]
    to: [37, 4]
  .line
    from: [33, 6]
    to: [37, 6]
  .line
    from: [33, 8]
    to: [37, 8]

console.log traditional.toString()

bay = lines()

# cornice
  .box
    from: [1, 0]
    to: [34, 1]
    style: 'bold'
  .line
    from: [0, 0]
    to: [35, 0]
  .line
    from: [3, 2]
    to: [32, 2]
  .line
    from: [3, 0]
    to: [3, 12]
  .line
    from: [32, 0]
    to: [32, 12]
  .line
    from: [3, 12]
    to: [32, 12]
    style: 'bold'

# bay
  .line
    from: [12, 0]
    to: [12, 12]
    style: 'bold'
  .line
    from: [23, 0]
    to: [23, 12]
    style: 'bold'

# windows
  .box
    from: [4, 3]
    to: [11, 11]
  .box
    from: [13, 3]
    to: [22, 11]
  .box
    from: [24, 3]
    to: [31, 11]
  .line
    from: [4, 7]
    to: [11, 7]
    style: 'bold'
  .line
    from: [13, 7]
    to: [22, 7]
    style: 'bold'
  .line
    from: [24, 7]
    to: [31, 7]
    style: 'bold'

console.log bay.toString()


plaid = lines()
  .box
    from: [0, 0]
    to: [16, 6]

# warp
  .line
    from: [1, 0]
    to: [1, 6]
    style: 'bold'
    color: foreground: 'red'
  .line
    from: [2, 0]
    to: [2, 6]
    color: foreground: 'green'
  .line
    from: [4, 0]
    to: [4, 6]
    color: foreground: 'red'
  .line
    from: [5, 0]
    to: [5, 6]
    style: 'double'
    color: foreground: 'blue'
  .line
    from: [6, 0]
    to: [6, 6]
    color: foreground: 'green'
  .line
    from: [8, 0]
    to: [8, 6]
    color: foreground: 'red'
  .line
    from: [9, 0]
    to: [9, 6]
    style: 'bold'
    color: foreground: 'red'
  .line
    from: [10, 0]
    to: [10, 6]
    color: foreground: 'green'
  .line
    from: [12, 0]
    to: [12, 6]
    color: foreground: 'red'
  .line
    from: [13, 0]
    to: [13, 6]
    style: 'double'
    color: foreground: 'blue'
  .line
    from: [14, 0]
    to: [14, 6]
    color: foreground: 'green'

# weft
  .line
    from: [0, 1]
    to: [16, 1]
    style: 'bold'
    color: foreground: 'red'
  .line
    from: [0, 2]
    to: [16, 2]
    style: 'double'
  .line
    from: [0, 3]
    to: [16, 3]
    color: foreground: 'green'
  .line
    from: [0, 4]
    to: [16, 4]
    style: 'bold'
    color: foreground: 'red'
  .line
    from: [0, 5]
    to: [16, 5]
    style: 'double'

console.log plaid.toString()


logo = lines()
  .box
    from: [0, 0]
    to: [40, 10]
    style: 'rounded'
  .line
    from: [2, 0]
    to: [2, 14]
    style: 'bold'
  .line
    from: [38, 0]
    to: [38, 10]
    style: 'bold'
  .line
    from: [0, 1]
    to: [40, 1]
    style: 'bold'
  .line
    from: [0, 9]
    to: [40, 9]
    style: 'bold'
  .line
    from: [2, 5]
    to: [38, 5]
  .box
    from: [4, 2]
    to: [13, 4]
    style: 'double'
  .line
    from: [2, 12]
    to: [4, 12]
    style: 'bold'
  .line
    from: [2, 13]
    to: [4, 13]
    style: 'bold'
  .line
    from: [2, 14]
    to: [4, 14]
    style: 'bold'

console.log logo.toString()



calculateBox = (name, nw) ->
  se = [nw[0] + 3 + name.length, nw[1] + 2]
  sw = [nw[0], se[1]]
  ne = [se[0], nw[1]]
  {nw, se, sw, ne}

functionCall = (program, name, nw) ->
  {nw, se, sw, ne} = calculateBox name, nw
  program
    .line nw, sw
    .line nw, ne
    .line sw, se, "double"
    .line ne, se, "double"

functionDeclare = (program, name, nw) ->
  {nw, se, sw, ne} = calculateBox name, nw
  program
    .line nw, sw, "double"
    .line nw, ne
    .line sw, se
    .line ne, se, "double"

integerLiteral = (program, name, nw) ->
  {nw, se, sw, ne} = calculateBox name, nw
  program
    .box nw, se, "double"

addName = (str, name, nw) ->
  str
    .split '\n'
    .map (row, i) ->
      unless i is nw[1] + 1
        row
      else
        row[...nw[0] + 2] + name + row[nw[0] + 2 + name.length..]
    .join '\n'

functions = [
  { name: "+", position: [ 7,  6] }
  { name: "!", position: [ 7,  9] }
  { name: "×", position: [13, 12] }
  { name: "?", position: [19, 12] }
  { name: ">", position: [24,  2] }
]

literals = [
  { name: "-1", position: [ 0, 6] }
  { name:  "1", position: [19, 9] }
  { name:  "2", position: [30, 2] }
]

declarations = [
  { name: "!", position: [17, 0] }
]

all = functions.concat literals, declarations

factorial = lines()

functionCall factorial, name, position for {name, position} in functions
integerLiteral factorial, name, position for {name, position} in literals
functionDeclare factorial, name, position for {name, position} in declarations

factorial
  .line [ 5,  7], [ 7,  7]
  .line [ 9,  8], [ 9,  9]
  .line [ 9, 11], [ 9, 15]
  .line [ 9, 15], [15, 15]
  .line [15, 15], [15, 14]
  .line [11,  7], [15,  7]
  .line [15,  7], [15, 12]
  .line [17, 13], [19, 13]
  .line [21, 11], [21, 12]
  .line [21, 14], [21, 16]
  .line [23, 13], [26, 13]
  .line [26, 13], [26,  4]
  .line [28,  3], [30,  3]
  .line [24,  3], [13,  3]
  .line [13,  3], [13,  7]
  .line [19,  2], [19,  3]

rendered = factorial.toString()
rendered = addName rendered, name, position for {name, position} in all

console.log rendered