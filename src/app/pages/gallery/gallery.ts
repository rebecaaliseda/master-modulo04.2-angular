import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { RotateDirective } from '../../directives/rotate';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, SlicePipe, RotateDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent implements OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}

  images = [
    {
      id: 1,
      src: 'assets/gallery/beagle.png',
      title: 'Beagle',
    },
    {
      id: 2,
      src: 'assets/gallery/border-collie.png',
      title: 'Border Collie',
    },
    {
      id: 3,
      src: 'assets/gallery/bulldog.png',
      title: 'Bulldog',
    },
    {
      id: 4,
      src: 'assets/gallery/caniche.png',
      title: 'Caniche',
    },
    {
      id: 5,
      src: 'assets/gallery/golden-retriever.png',
      title: 'Golden Retriever',
    },
    {
      id: 6,
      src: 'assets/gallery/husky.png',
      title: 'Husky',
    },
    {
      id: 7,
      src: 'assets/gallery/labrador.png',
      title: 'Labrador',
    },
    {
      id: 8,
      src: 'assets/gallery/pastor-aleman.png',
      title: 'Pastor Alemán',
    },
    {
      id: 9,
      src: 'assets/gallery/podenco.png',
      title: 'Podenco',
    },
    {
      id: 10,
      src: 'assets/gallery/rottweiler.png',
      title: 'Rottweiler',
    },
    {
      id: 11,
      src: 'assets/gallery/teckel.png',
      title: 'Teckel',
    },
  ];

  selectedIndex = 0;

  pageSize = 3;

  pageStart = 0;

  imageSize = 500;

  playing = false;

  timer?: number;

  get selectedImage() {
    return this.images[this.selectedIndex];
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  previous(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

  next(): void {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
    }
  }

  increaseSize(): void {
    this.imageSize += 50;
  }

  decreaseSize(): void {
    if (this.imageSize > 200) {
      this.imageSize -= 50;
    }
  }

  play(): void {
    if (this.playing) {
      return;
    }

    this.playing = true;

    this.timer = window.setInterval(() => {
      console.log('Cambio imagen');

      if (this.selectedIndex === this.images.length - 1) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }

      this.cdr.detectChanges();
    }, 2000);
  }

  stop(): void {
    clearInterval(this.timer);
    this.playing = false;
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  previousPage(): void {
    if (this.pageStart >= this.pageSize) {
      this.pageStart -= this.pageSize;
    }
  }

  nextPage(): void {
    if (this.pageStart + this.pageSize < this.images.length) {
      this.pageStart += this.pageSize;
    }
  }
}
