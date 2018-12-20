export class Icons {
  constructor() {
  }

  icons(matIconRegistry: any, domSanitizer: any) {
    // for adding icon but for custom icon , first go in icon.svg file then remove "fill:" in last of tag

    // Header in mobile
    matIconRegistry.addSvgIcon(
      'menu',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-in-mobile/menu.svg')
    );
    matIconRegistry.addSvgIcon(
      'pricing',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-in-mobile/pricing.svg')
    );
    matIconRegistry.addSvgIcon(
      'solutions',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-in-mobile/solutions.svg')
    );
    matIconRegistry.addSvgIcon(
      'features',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-in-mobile/features.svg')
    );
    matIconRegistry.addSvgIcon(
      'contact-us',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-in-mobile/contact-us.svg')
    );
    matIconRegistry.addSvgIcon(
      'X',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-in-mobile/X.svg')
    );

    // Header after login
    matIconRegistry.addSvgIcon(
      'instagram',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/instagram.svg')
    );
    matIconRegistry.addSvgIcon(
      'instagram-full',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/instagram full.svg')
    );
    matIconRegistry.addSvgIcon(
      'telegram',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/telegram.svg')
    );
    matIconRegistry.addSvgIcon(
      'telegram-full',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/telegram full.svg')
    );
    matIconRegistry.addSvgIcon(
      'linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/linkedin.svg')
    );
    matIconRegistry.addSvgIcon(
      'linkedin-full',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/linkedin full.svg')
    );
    matIconRegistry.addSvgIcon(
      'twitter',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/twitter.svg')
    );
    matIconRegistry.addSvgIcon(
      'twitter-full',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/twitter full.svg')
    );
    matIconRegistry.addSvgIcon(
      'plus',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/plus.svg')
    );
    matIconRegistry.addSvgIcon(
      'user-profile',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/header-after-login/user.svg')
    );


    // SideNavNar after login
    matIconRegistry.addSvgIcon(
      'analyze',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/sidenavbar/analyze.svg')
    );
    matIconRegistry.addSvgIcon(
      'calendar',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/sidenavbar/calendar.svg')
    );
    matIconRegistry.addSvgIcon(
      'content',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/sidenavbar/content.svg')
    );
    matIconRegistry.addSvgIcon(
      'CRM',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/sidenavbar/CRM.svg')
    );
    matIconRegistry.addSvgIcon(
      'menu',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/sidenavbar/menu.svg')
    );
    matIconRegistry.addSvgIcon(
      'notification',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/sidenavbar/notification.svg')
    );
    matIconRegistry.addSvgIcon(
      'project',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/sidenavbar/project.svg')
    );
    matIconRegistry.addSvgIcon(
      'team member',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/sidenavbar/team member.svg')
    );


    // Instagram - content production
    matIconRegistry.addSvgIcon(
      'emoji',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/instagram/content-production/emoji.svg')
    );
    matIconRegistry.addSvgIcon(
      'addFiles',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/instagram/content-production/add video or picture2.svg')
    );
    matIconRegistry.addSvgIcon(
      'editFiles',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/instagram/content-production/edit.svg')
    );
    matIconRegistry.addSvgIcon(
      'preSavedTxt',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/instagram/content-production/Pre-saved text.svg')
    );
    matIconRegistry.addSvgIcon(
      'previewFile',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/instagram/content-production/preview.svg')
    );
    matIconRegistry.addSvgIcon(
      'delete',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/instagram/content-production/del.svg')
    );

  }
}

