import { async, TestBed } from '@angular/core/testing';
import { AuthenticationModule } from './authentication.module';

describe('AuthenticationModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AuthenticationModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(AuthenticationModule).toBeDefined();
    });
});
