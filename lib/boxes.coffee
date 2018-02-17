lines = require ('lines-js')

# adapted from one of the examples provided in the lines.js package,
# specifically https://github.com/couchand/lines-js/blob/master/example/funciton.coffee
class Boxes
	constructor: (@word) ->
		# @word = word
		# console.log "Hey Boxes"
		@literals = @word
			.split ""
			.map (val, i) -> {name: val, position: [2+ i * 6, 2]}
			.filter (obj) -> /[A-Za-z_]/.test(obj.name)


	go: () ->
		all = @literals

		factorial = lines()

		integerLiteral factorial, name, position for {name, position} in @literals
		left = 0
		top = 0
		height = 6
		width = 60
		factorial
			.line [0, 0], 			[left + width, 0], "rounded"
			.line [0, 0], 			[0, top + height], "rounded"
			.line [left + width, 0], [left + width, top + height], "rounded"
			.line [0, top + height], [left + width, top + height], "rounded"

		rendered = factorial.toString()
		rendered = addName rendered, name, position for {name, position} in all
		output = rendered

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
			.box nw, se, "rounded"

	addName = (str, name, nw) ->
		#name = "X"
		str
			.split '\n'
			.map (row, i) ->
				unless i is nw[1] + 1
					row
				else
					row[...nw[0] + 2] + name + row[nw[0] + 2 + name.length..]
			.join '\n'


# console.log rendered

module.exports = Boxes
# module.exports.boxes = rendered
