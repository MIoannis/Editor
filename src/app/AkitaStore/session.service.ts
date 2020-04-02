import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore,
              private http: HttpClient) {
  }

  update(id, session: Partial<Session>) {
    this.sessionStore.update(id, session);
  }

}
