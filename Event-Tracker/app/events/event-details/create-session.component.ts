import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { restrictedWords } from '../shared/restricted-words.validator';
import { ISession } from '../shared/event.model';

@Component({
	moduleId: module.id,
	selector: 'create-session',
	templateUrl: 'create-session.component.html',
	styles: [`
		em { float: right; color: #E05C65; padding-left: 10px; }
		.error input, .error select, .error textarea { background-color: #E3C3C5; }
		.error ::-webkit-input-placeholder: { color: #999; }
		.error ::-moz-placeholder { color: #999; }
		.error :-moz-placeholder { color: #999; }
		.error :ms-input-placeholder { color: #999; }
	`]
})
export class CreateSessionComponent implements OnInit {
	constructor(private router:Router) {}

	@Output() saveNewSession = new EventEmitter();
	@Output() cancelAddSession1 = new EventEmitter();


	newSessionForm: FormGroup;
	name: FormControl;
	presenter: FormControl;
	duration: FormControl;
	level: FormControl;
	abstract: FormControl;


	ngOnInit() {
		this.name = new FormControl('', Validators.required);
		this.presenter = new FormControl('', Validators.required);
		this.duration = new FormControl('', Validators.required);
		this.level = new FormControl('', Validators.required);
		this.abstract = new FormControl('', [ Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

		this.newSessionForm = new FormGroup({
			name: this.name,
			presenter: this.presenter,
			duration: this.duration,
			level: this.level,
			abstract: this.abstract
		});
	}

	saveSession(formValue){
		let session:ISession = {
			id: undefined,
			name: formValue.name,
			presenter: formValue.presenter,
			duration: +formValue.duration,
			level: formValue.level,
			abstract: formValue.abstract,
			voters: []
		}
		this.saveNewSession.emit(session);
	}

	cancel(){
		this.cancelAddSession1.emit();
	}
		
}