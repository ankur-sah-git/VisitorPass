import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.component.html',
  styleUrls: ['./create-pass.component.css']
})
export class CreatePassComponent implements OnInit {
  CrtVstr!: FormGroup;
  submitted = false;
  errorMessage: string = '';
  interval: any;
  showNotification = false;
  submittedMessage: string = '';
  mybreakpoint: number | undefined;

  Valvstcatg =false;
  Valvstvdr =false;
  Valvstorgas =false;
  Valvstprcdept=false;
  Valvstprcdsect=false;
  Valprpsvst=false;
  Valvstfrmdte=false;
  Valvsttodte=false;
  Valintme=false;
  Valouttme=false;
  Valvstrmrks=false;
  Valvstnme=false;
  vstmblmsg=false;
  Valvstelcgdgt=false;
  Valvstothgdgt=false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.CrtVstr = this.fb.group({
      vstfrmdte: new FormControl(new Date().toISOString().substring(0, 10)),
      vstcatg: ['', Validators.required],
      vstvdr: ['', Validators.required],
      vstorgans: ['', Validators.required],
      vstprcdept: ['', Validators.required],
      vstprcdsect: ['', Validators.required],
      vstprpsvst: ['', Validators.required],
      vsttodte: ['', Validators.required],
      vstintme: ['', Validators.required],
      vstouttme: ['', Validators.required],
      vstremarks: ['', Validators.required],
      vstnme: ['', Validators.required],
      vstmbl: ['', Validators.required],
      vstelcgdgt: ['', Validators.required],
      vstothgdgt: ['', Validators.required],
    });

    if (window.innerWidth <= 400) {
      this.mybreakpoint = 1;
    } else if (window.innerWidth <= 850) {
      this.mybreakpoint = 2;
    } else {
      this.mybreakpoint = 4;
    }
  }

  handleSize(event: any) {
    if (event.target.innerWidth <= 400) {
      this.mybreakpoint = 1;
    } else if (event.target.innerWidth <= 850) {
      this.mybreakpoint = 2;
    } else {
      this.mybreakpoint = 4;
    }
  }

    onSubmit(event: any) {
}

public onCloseClick(): void {
  this.showNotification = false;
  let currentUrl = this.router.url;
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentUrl]);
  });
  this.CrtVstr.enable();
}

}


