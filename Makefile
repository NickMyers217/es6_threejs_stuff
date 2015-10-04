transpiler = babel
main = ./js/main.js
output = ./bundle.js
server = beefy
port = 1337

all:
	$(transpiler) $(main) -o $(output)
	$(server) $(output) $(port)

clean:
	rm $(output)
