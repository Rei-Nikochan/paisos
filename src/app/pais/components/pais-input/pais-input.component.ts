import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent implements OnInit {
  
  
  @Output() onEnter   : EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()
  
  @Input() placeholder:string = ""

  debouncer: Subject<string> = new Subject();
  
  terme: string = ''

  ngOnInit(){
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
      this.onDebounce.emit( valor )
    })
   }

   cercar():void {
     this.onEnter.emit( this.terme )
    }
    
    teclaPresionada(){
      this.debouncer.next( this.terme )
    }
}
