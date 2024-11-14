import { Routes } from '@angular/router';
import { MediaComponent } from './page-site/media/media.component';
import { BoutiqueComponent } from './page-site/boutique/boutique.component';
import { ActualitesComponent } from './page-site/actualites/actualites.component';

export const routes: Routes = [
    {path: 'Media', component: MediaComponent},
    {path: 'Actualites', component: ActualitesComponent},
    {path: 'Boutique', component: BoutiqueComponent}
];
