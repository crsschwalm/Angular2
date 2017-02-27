/*
*
* Barrelling brings all exports for one feature/folder and encapsulates them in one export path.
* Then, when we import services/components/directives into other files, it requires one import statement and specific services/components/directives can easily be specified
*
 */
export * from './create-event.component';
export * from './event-thumbnail.component';
export * from './events-list-resolver.service';
export * from './event-resolver.service';
export * from './events-list.component';
export * from './shared/index';
export * from './event-details/index';
export * from './location-validator.directive';