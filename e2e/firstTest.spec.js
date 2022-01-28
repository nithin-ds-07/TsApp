describe('Example', () => {
  before(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have Signin screen', async () => {
    await waitFor(element(by.id('signinTitle'))).toBeVisible().withTimeout(1000);

  });
  it('should fill login form', async () => {
    await element(by.id('enterEmail')).replaceText('nithindd7@gmail.com');
    await element(by.id('enterPwd')).replaceText('12345678');
    await waitFor(element(by.id('forgetPwd'))).toBeVisible().withTimeout(1000);
  });

  it('should press the login button and navigate to welcome screen', async() => {
    await element(by.id('loginButton')).tap();
    await waitFor(element(by.text('Welcome to BTC'))).toBeVisible().withTimeout(1000);
    
  });

  it('should press the create project button', async() => {
    await element(by.id('createProject')).tap();
  })

  it('should navigate to create project screen', async () => {
    await waitFor(element(by.id('createProjectScreen'))).toBeVisible().withTimeout(1000);

  });

  it('should fill create project form', async() => {
    await element(by.id('enterProName')).replaceText('PM App');
    await element(by.id('enterManName')).replaceText('Rohith');
    await element(by.id('enterLeadName')).replaceText('Rohith');
    await element(by.id('enterClientName')).replaceText('BTC');
  });

  it('should press the add creat project button and navigate to project list screen', async() => {
    await element(by.id('createProjectButton')).tap();
  });

  it('should navigate to created project details screen', async() =>{
    await waitFor(element(by.text('Project has been created successfully!'))).toBeVisible().withTimeout(1000);
  });

  it('should display the created projected details', async() => {
    await waitFor(element(by.id('resProName'))).toBeVisible().withTimeout(1000);
    await waitFor(element(by.id('resManName'))).toBeVisible().withTimeout(1000);
    await waitFor(element(by.id('resLeadName'))).toBeVisible().withTimeout(1000);
    await waitFor(element(by.id('resClientName'))).toBeVisible().withTimeout(1000);
  });

  it('should press the back to dashboard button and navigate to welcomescreen', async() => {
    await element(by.id('dashboardButton')).tap();
  });

  it('should press add timesheet button from the welcomescreen and navigate to add timesheet screen', async() => {
    await waitFor(element(by.text('Welcome to BTC'))).toBeVisible().withTimeout(1000);
    await element(by.id('addTimesheet')).tap();
  });

  it('should display list of projects and press anyone of the project and nav to fill timesheet screen', async() => {
    await element(by.text('Manager-3')).tap();
  });

  it('should display project details and fill timesheet', async() => {
    await waitFor(element(by.text('Fill the timesheet'))).toBeVisible().withTimeout(1000);
  });

  it('should fill the timesheet form', async() => {
    await element(by.id('usedHrs')).replaceText('150');
  });

  it('should press the add timesheet button and navigate to list of timesheet filled',async() => {
    await element(by.id('addTimesheetButton')).tap();
  });

  it('should display the filled timesheet details', async() => {
    await waitFor(element(by.text('Your timeSheet'))).toBeVisible().withTimeout(1000);
  })

  it('should press logout button and navigate to logout screen', async() => {
    await element(by.id('logoutScreen')).tap();
  });

  it('should display successfull loggedout screen', async() => {
    await waitFor(element(by.text('You have been loggedout successfully'))).toBeVisible().withTimeout(1000);
  });

  
  // it('should have signin text', async() => {
  //   await expect(element(by.id("signinTitle"))).toBeVisible()
  // })

  // const email = 'nithindd7@gmail.com'
  // it('should type nithindd7@gmail.com', async() => {
  //   const input = element(by.id('enterEmail'))
  //   await input.typeText(email)
  // })
  // const pwd = '12345678'
  // it('should type 12345678', async() => {
  //   const input = element(by.id('enterPwd'))
  //   await input.typeText(pwd)
  // })

  // it('should have forget password text', async() => {
  //   await expect(element(by.id("forgetPwd"))).toBeVisible()
  // })

  // it('should press on the login button', async() => {
  //   await element(by.id("loginButton")).tap()
  //   await waitFor(element(by.text('Welcome to BTC'))).toBeVisible().withTimeout(5000);
  // })

  // it('should have welcome text', async() => {
  //   await waitFor(element(by.text('Welcome to BTC'))).toBeVisible().withTimeout(5000);
  // })



  // it('should have a alert with typed text', async() => {
  //   await expect(element(by.text(typedText)).atIndex(0)).toBeVisible()
  //   await element(by.text('OK')).tap();
  // })

});
