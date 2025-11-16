import {BrowserContext,Page,test} from '@playwright/test'
import { TestData } from '../testdata/testdata';

export abstract class BasePage{
readonly page:Page;
readonly context:BrowserContext;
readonly testdata :TestData;


constructor(page:Page,browsercontext:BrowserContext,testdata:TestData){
    this.page = page;
    this.context = browsercontext;
    this.testdata = testdata;
}


    
}