import {Injectable, Renderer2, RendererFactory2} from '@angular/core';

// I had to create this service to inject renderer2 in some of my component like instagram.component.ts
@Injectable()
export class MyRendererService {
  public renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
}
