export type DemoButtonParameter = g.EParameterObject & {
  disabled: boolean;
  onClick: () => void;
};

export class DemoButton extends g.E {
  private bg: g.FilledRect;

  private _disabled: boolean = false;

  constructor({ disabled, onClick, ...params }: DemoButtonParameter) {
    super({
      ...params,
      touchable: true,
    });

    this.bg = new g.FilledRect({
      scene: this.scene,
      width: this.width,
      height: this.height,
      cssColor: '#e4eb12',
      touchable: false,
    });
    this.append(this.bg);

    const font = new g.DynamicFont({
      game: this.scene.game,
      fontFamily: 'sans-serif',
      size: 20,
    });

    const label = new g.Label({
      scene: this.scene,
      font: font,
      text: 'click me!',
      fontSize: 20,
      textColor: 'black',
    });
    label.x = (this.width - label.width) / 2;
    label.y = (this.height - label.height) / 2;
    this.append(label);

    this.onPointDown.add(() => {
      if (this._disabled) return;

      this.bg.cssColor = '#cdd310';
      this.bg.modified();
    });

    this.onPointUp.add(() => {
      if (this._disabled) return;

      this.bg.cssColor = '#e4eb12';
      this.bg.modified();
      onClick();
    });

    this.disabled = disabled;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(disabled: boolean) {
    this._disabled = disabled;

    this.bg.cssColor = disabled ? '#dbdbdb' : '#e4eb12';
    this.bg.modified();
  }
}
