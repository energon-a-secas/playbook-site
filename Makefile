PORT = 8819

.PHONY: serve kill

serve:
	@if [ -f ../../scripts/serve.py ]; then python3 ../../scripts/serve.py $(PORT); else python3 -m http.server $(PORT); fi

kill:
	lsof -ti tcp:$(PORT) | xargs kill -9 2>/dev/null || true
