import { Injectable } from '@angular/core';
import { account, ID } from '../libs/appwrite';
import { BehaviorSubject, Subject } from 'rxjs';
import { Models } from 'appwrite';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser$ =
    new BehaviorSubject<Models.User<Models.Preferences> | null>(null);

  constructor() {}

  public get currentUser() {
    return this.currentUser$.asObservable();
  }

  public async login(email: string, password: string) {
    await account.createEmailSession(email, password);
    this.currentUser$.next(await account.get());
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
