PORT = 8819

.PHONY: serve kill

serve:
	python3 -m http.server $(PORT)

kill:
	lsof -ti tcp:$(PORT) | xargs kill -9 2>/dev/null || true
