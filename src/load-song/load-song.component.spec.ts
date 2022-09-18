import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSongComponent } from './load-song.component';

describe('LoadSongComponent', () => {
  let component: LoadSongComponent;
  let fixture: ComponentFixture<LoadSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
