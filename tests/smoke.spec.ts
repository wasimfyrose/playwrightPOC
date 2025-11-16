import {test} from "@playwright/test"


test.describe('e2eFlow',{tag: ['@smoke','@regression']} ,()=>
{

    test.beforeEach('loginSteps', async({page})=>{
        page.close

    })


});