// Entry point for the game
import Engine from 'lowfleet-engine'

const app = document.getElementById('app');
if (app) {
  app.innerHTML = '<h1>Welcome to Lowfleet Game!</h1>';
  // Example usage of Engine
	const engine = new Engine()
	engine.start()
}
