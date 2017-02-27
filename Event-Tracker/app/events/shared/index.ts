/*
*
* Barrelling brings all exports for one feature/folder and encapsulates them in one export path.
* Then, when we import services/components/directives into other files, it requires one import statement and specific services/components/directives can easily be specified
*
 */
export * from './event.service';
export * from './event.model';
export * from './restricted-words.validator';
export * from './duration.pipe';
