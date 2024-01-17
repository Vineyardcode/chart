class Chart{
  constructor(container,samples,options){
    this.samples=samples;

    this.axesLabels=options.axesLabels;
    this.styles=options.styles;

    this.canvas=document.createElement('canvas');
    this.canvas.width=options.size;
    this.canvas.height=options.size;
    this.canvas.style='background-color:white';
    container.appendChild(this.canvas);

    this.ctx=this.canvas.getContext('2d');

    this.margin=options.size*0.1;
    this.transparency=0.5;

    this.pixelBounds=this.#getPixelBounds();
    this.dataBounds=this.#getDataBounds();

    this.#draw();
  }

  #getPixelBounds(){
    const {canvas,margin}=this;
    const bounds={
      left:margin,
      right:canvas.width-margin,
      top:margin,
      bottom:canvas.height-margin
    };
    return bounds;
  }

  #getDataBounds(){
    const {samples}=this;
    const x=samples.map(s=>s.point[0]);
    const y=samples.map(s=>s.point[1]);
    const minX=Math.min(...x);
    const maxX=Math.max(...x);
    const minY=Math.min(...y);
    const maxY=Math.max(...y);
    const bounds={
      left:minX,
      right:maxX,
      top:maxY,
      bottom:minY
    };
    return bounds;
  }
}