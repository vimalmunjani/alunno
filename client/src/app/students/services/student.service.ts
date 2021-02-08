import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../models';
import { StudentConstants } from '../utils';

@Injectable()
export class StudentService {

  constructor(private _http: HttpClient) { }

  /**
   * Get all Students
   */
  getAllStudents(): Observable<IStudent[]> {
    return this._http.get<IStudent[]>(StudentConstants.STUDENTS_API_PATH);
  }

  /**
   * Create Student
   * @param student
   */
  createStudent(student: IStudent): Observable<IStudent> {
    return this._http.post<IStudent>(StudentConstants.STUDENTS_API_PATH, student);
  }

  /**
   * Update Student
   * @param studentId
   * @param changes
   */
  updateStudent(studentId: string, changes: Partial<IStudent>): Observable<IStudent> {
    return this._http.patch<IStudent>(`${StudentConstants.STUDENTS_API_PATH}/${studentId}`, changes);
  }

  /**
   * Delete Student
   * @param studentId
   */
  deleteStudent(studentId: string): Observable<boolean> {
    return this._http.delete<boolean>(`${StudentConstants.STUDENTS_API_PATH}/${studentId}`);
  }

}
