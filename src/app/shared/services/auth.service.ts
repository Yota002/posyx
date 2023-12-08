import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Models } from 'appwrite';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  from,
  map,
  tap,
  throwError,
} from 'rxjs';
import { account, ID } from '../libs/appwrite';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser$ =
    new BehaviorSubject<Models.User<Models.Preferences> | null>(null);

  constructor(private router: Router) {
    this.ngOnInit();
  }

  async ngOnInit() {
    this.getCurrentUser().subscribe();
  }

  public get currentUser() {
    return this.currentUser$.asObservable();
  }

  private getCurrentUser() {
    return from(account.get()).pipe(
      map((user) => this.currentUser$.next(user)),
      catchError((err: any) => {
        this.router.navigate(['/', 'profile', 'login']);
        return throwError(() => new Error(err));
      })
    );
  }

  public login(email: string, password: string) {
    return from(account.createEmailSession(email, password)).pipe(
      concatMap(() => from(account.get())),
      map((res) => this.currentUser$.next(res))
    );
  }

  public async register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    this.login(email, password);
  }

  public async logout() {
    await account.deleteSession('current');
    this.currentUser$.next(null);
  }
}
