lines = require ('lines-js')
chalk = require ('chalk')

class Boxes
	constructor: (@word) ->
		# @word = word
		# console.log "Hey Boxes"
		@functions = [
			# { name: "+", position: [ 7,  6] }
			# { name: "!", position: [ 7,  9] }
			# { name: "×", position: [13, 12] }
			# { name: "?", position: [19, 12] }
			# { name: ">", position: [24,  2] }
		]

		# @literals = [
		# 	# { name: "-1", position: [ 0, 6] }
		# 	{ name:  "1", position: [19, 9] }
		# 	{ name:  "2", position: [30, 2] }
		# 	{ name:  "5", position: [40, 1] }
		# 	{ name:  "9", position: [45, 1] }
		# ]

		@literals = @word
			.split ""
			# .filter (val) ->
				# console.log (val.match /[A-Za-z]/)
				# /[A-Za-z]/.test(val)
			.map (val, i) -> {name: val, position: [2+ i * 6, 2]}
			.filter (obj) -> /[A-Za-z_]/.test(obj.name)

		@declarations = [
			# { name: "!", position: [17, 0] }
		]


	go: () ->
		# console.log "word: ", @word
		# console.log @literals
		all = @functions.concat @literals, @declarations

		factorial = lines()

		functionCall factorial, name, position for {name, position} in @functions
		integerLiteral factorial, name, position for {name, position} in @literals
		functionDeclare factorial, name, position for {name, position} in @declarations
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
