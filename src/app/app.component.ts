import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { AppService } from "./app.service";
import { Paging } from './utils/paging';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  options: Array<string> = ['name', 'email', 'body'];
  type: string = 'body';

  pager: any = {};
  pagedComments: any = [];
  comments: any = [];
  pageOption: Array<number> = [5, 10, 25, 100];
  pageEvent: PageEvent;
  
  private _url: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(
    private appService: AppService,
    private paging: Paging
  ) {}

  ngOnInit(): void {
    this._init();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  _init() {
    return this._getComments()
        .then((response: Response) => {
          this.comments = response;
          this.setPage({pageIndex: 0, pageSize: 10, length: this.comments.length})
        }, (error) => {
          console.log(error);
        });
  }

  _getComments() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    return new Promise((resolve, reject) => {
      const observable: Observable<any> = this.appService.getComments(this._url);
      this.subscription = observable.subscribe((res: any) => {
        resolve(res);
      }, (error) => {
        reject(error);
      })
    })
  }

  setPage({pageIndex, pageSize, length}) {
    this.pager = this.paging.getPager({pageIndex, pageSize, length});
    this.pagedComments = this.comments.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
