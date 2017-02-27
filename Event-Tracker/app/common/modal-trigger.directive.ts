import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './index';


@Directive({
	//Selector decorator will be the unique identifier when referencing the component in the template
	//since this is an attribute and not an element, use [] to signify this difference
  	selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
	private el: HTMLElement;
	//since we need the input for which elementId we are refering to, we need to see what we set the directive value to
	//the input then is modal-trigger which causes an error for the '-'... heres how to get around it
	@Input('modal-trigger') modalId: string;

	constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any){
		this.el = ref.nativeElement;
	}

	ngOnInit(){
		this.el.addEventListener('click', e =>{
			//referring to the input element that we set in the html template to searchResults, and we open that modal
			this.$('#'+this.modalId).modal({})
		})
	}
}