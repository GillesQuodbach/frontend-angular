import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Training } from '../model/training.model';
import { User } from '../model/user.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getCategories() {
    return this.http.get<Category[]>(environment.host + '/categories');
  }

  public getTrainingsByCategory(id: number) {
    return this.http.get<Training[]>(
      environment.host + '/trainings/category/' + id
    );
  }

  public getTrainings() {
    return this.http.get<Training[]>(environment.host + '/trainings');
  }

  public getTraining(id: number) {
    return this.http.get<Training>(environment.host + '/trainings/' + id);
  }

  public getUsers() {
    return this.http.get<User[]>(environment.host + '/users');
  }

  public getUserByEmail(email: string) {
    return this.http.get<User[]>(environment.host + '/users?email=' + email);
  }

  public postTraining(training: any) {
    return this.http.post<Training>(environment.host + '/trainings', training);
  }

  public delTraining(training: Training) {
    return this.http.delete(environment.host + '/trainings/' + training.id);
  }

  public putTraining(training: any) {
    return this.http.put<Training>(
      environment.host + '/trainings/' + training.id,
      training
    );
  }
}
