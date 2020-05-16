import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsblogsComponent } from './newsblogs.component';

describe('NewsblogsComponent', () => {
  let component: NewsblogsComponent;
  let fixture: ComponentFixture<NewsblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
