import { Component, OnInit } from '@angular/core';
import { restApiService } from 'src/app/core/services/rest-api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overseer-list',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './overseer-list.component.html',
  styleUrls: ['./overseer-list.component.scss']
})
export class OverseerListComponent implements OnInit {
  teachers: any[] = [];
  selectedTeacherId?: string;
  breadCrumbItems: Array<{ label: string, url?: string }> = [
    { label: 'Home', url: '/' },
    { label: 'Teachers', url: '/teachers' },
    { label: 'List View' }
  ];

  constructor(private apiService: restApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.apiService.getTeacherStats().subscribe({
      next: (data) => {
        this.teachers = data;
      },
      error: (error) => {
        console.error('Error loading teacher stats:', error);
      }
    });
  }

  navigateToProjects(teacherId: string): void {
    this.router.navigate(['learning/instructors-list', teacherId]);
  }

  selectTeacher(teacherId: string): void {
    this.selectedTeacherId = teacherId;
  }

  onSort(property: string): void {
    this.teachers = this.teachers.sort((a, b) => (a.account_details[property] > b.account_details[property]) ? 1 : -1);
  }
}