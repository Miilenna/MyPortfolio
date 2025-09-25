import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoxelCatComponent } from './voxel-cat.component';

describe('VoxelCatComponent', () => {
  let component: VoxelCatComponent;
  let fixture: ComponentFixture<VoxelCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoxelCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoxelCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
