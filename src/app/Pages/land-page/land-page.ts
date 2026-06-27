import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  speed: number;
}

@Component({
  selector: 'app-land-page',
  imports: [RouterModule],
  templateUrl: './land-page.html',
  styleUrl: './land-page.css',
})

export class LandPage implements AfterViewInit, OnDestroy {

  constructor(private router:Router){}

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private rafId = 0;

// menuItems = [
//   { label: 'JOIN ROOM',    action: 'join',    handler: () => this.joinRoom()   },
//   { label: 'CREATE ROOM',  action: 'create',  handler: () => this.createRoom() },
//   { label: 'FIND ROOM',    action: 'find',    handler: () => this.findRoom()   },
// ];

// -----------------------------------------------------------------------------------------------------------------
  activeIndex = 2;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.initStars();
    this.animate();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resize();
    this.initStars();
  }

  // @HostListener('window:keydown', ['$event'])
  // onKey(e: KeyboardEvent): void {
  //   if (e.key === 'ArrowUp') {
  //     this.activeIndex = (this.activeIndex - 1 + this.menuItems.length) % this.menuItems.length;
  //     e.preventDefault();
  //   } else if (e.key === 'ArrowDown') {
  //     this.activeIndex = (this.activeIndex + 1) % this.menuItems.length;
  //     e.preventDefault();
  //   } else if (e.key === 'Enter' || e.key === ' ') {
  //     this.onSelect(this.menuItems[this.activeIndex]);
  //   }
  // }

  setActive(i: number): void { this.activeIndex = i; }

  onSelect(item: { label: string; action: string }): void {
    console.log('Action:', item.action);
    // plug in your router / game logic here
  }

  private resize(): void {
    const c = this.canvasRef.nativeElement;
    c.width  = window.innerWidth;
    c.height = window.innerHeight;
  }

  private initStars(n = 130): void {
    const c = this.canvasRef.nativeElement;
    this.stars = Array.from({ length: n }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height * 0.72,
      r: Math.random() * 1.5 + 0.4,
      a: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.003,
    }));
  }

  private animate = (): void => {
    const { ctx } = this;
    const c = this.canvasRef.nativeElement;
    ctx.clearRect(0, 0, c.width, c.height);
    this.stars.forEach(s => {
      s.a += s.speed;
      const alpha = 0.4 + 0.5 * Math.abs(Math.sin(s.a));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    });
    this.rafId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }

  // ---------------------------------------------------------------------------------------------------------------
  //main functions


    joinRoom(): void {
    this.router.navigate(['join-room']);
    console.log("join room ");
    
  }

  createRoom(): void {
    this.router.navigate(['create-room']);
    console.log("creeate room");
    
  }
  findRoom(): void{
    console.log("going on");
    
  }
}