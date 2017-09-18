import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  constructor() { }

  initialize() {
    $.fn.setupVerticalNavigation ? $.fn.setupVerticalNavigation() : '';
  }

  expand() {
    const navElement = $('.nav-pf-vertical');
    const bodyContentElement = $('.container-pf-nav-pf-vertical');

    navElement.removeClass('collapsed');
    bodyContentElement.removeClass('collapsed-nav');
  }

  collapse() {
    const navElement = $('.nav-pf-vertical');
    const bodyContentElement = $('.container-pf-nav-pf-vertical');

    navElement.addClass('collapsed');
    bodyContentElement.addClass('collapsed-nav');
  }
}
