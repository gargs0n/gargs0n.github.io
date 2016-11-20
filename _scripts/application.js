import ParticleRenderer from 'particles/renderer'

export default class Application {

  static init() {
      new ParticleRenderer(document.querySelectorAll('.stage__canvas canvas')[0]);
  }
}

Application.init();
