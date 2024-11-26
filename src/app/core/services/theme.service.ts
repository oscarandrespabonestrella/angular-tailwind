import { Injectable, signal } from '@angular/core';
import { Theme } from '../models/theme.model';
import { effect } from '@angular/core';

const FONT_SIZES: string[] = ['text-xs', 'text-sm', '', 'text-lg', 'text-xl'];
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public theme = signal<Theme>({ mode: 'light', color: 'base' });
  public fontSize = signal<string>('');

  fontIndex: number = 0;

  changeSize() {
    this.fontIndex = (this.fontIndex + 1) % FONT_SIZES.length;
    this.fontSize.set(FONT_SIZES[this.fontIndex]);
  }

  constructor() {
    this.loadTheme();
    effect(() => {
      this.setTheme();
    });
  }

  private loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.theme.set(JSON.parse(theme));
    }
  }

  private setTheme() {
    localStorage.setItem('theme', JSON.stringify(this.theme()));
    this.setThemeClass();
  }

  public get isDark(): boolean {
    return this.theme().mode == 'dark';
  }

  private setThemeClass() {
    document.querySelector('html')!.className = `${this.theme().mode} ${this.fontSize()}`;
    document.querySelector('html')!.setAttribute('data-theme', this.theme().color);
  }
}
