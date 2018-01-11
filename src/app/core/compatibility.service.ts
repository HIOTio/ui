import { Injectable } from '@angular/core';

@Injectable()
export class CompatibilityService {

  constructor() { }
  compatLevels() {
    return [
      {
        level: '0',
        compatibility: 'Unknown'
      },
      {
        level: '1',
        compatibility: 'Supports MQTT'
      },

      {
        level: '2',
        compatibility: 'Supports HIOT Message Structure'
      },
      {
        level: '3',
        compatibility: 'Fully Compatible'
      },
      {
        level: '4',
        compatibility: 'HIOT Certified'
      }
    ];
  }
}
