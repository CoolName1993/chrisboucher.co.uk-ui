import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const app = new PIXI.Application({
      autoResize: true,
      resolution: devicePixelRatio 
    });
    document.querySelector('#frame').appendChild(app.view);
    
    // Lets create a red square, this isn't 
    // necessary only to show something that can be position
    // to the bottom-right corner
    const rect = new PIXI.Graphics()
      .beginFill(0xf50057)
      .drawCircle(-200, -200, 50);
      
    // Add it to the stage
    app.stage.addChild(rect);
    
    // Listen for window resize events
    window.addEventListener('resize', resize);
    
    // Resize function window
    function resize() {
    
      // Get the p
      const parent = app.view.parentElement;
       
      // Resize the renderer
      app.renderer.resize(parent.clientWidth, parent.clientHeight);
      
      // You can use the 'screen' property as the renderer visible
      // area, this is more useful than view.width/height because
      // it handles resolution
      rect.position.set(app.screen.width, app.screen.height);
    }
    
    resize();
  }

}
