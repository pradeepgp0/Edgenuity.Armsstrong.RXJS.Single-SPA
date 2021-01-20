import { BehaviorSubject } from 'rxjs';

export const subject = new BehaviorSubject(0);

export const currentSubject = subject.asObservable();