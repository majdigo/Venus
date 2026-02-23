import type { InterventionData } from '../types';
import { rhinoplastie } from './rhinoplastie';
import { sleeveGastrique } from './sleeve-gastrique';
import { augmentationMammaire } from './augmentation-mammaire';
import { facettes } from './facettes';
import { greffeCheveux } from './greffe-cheveux';
import { liposuccion } from './liposuccion';
import { blepharoplastie } from './blepharoplastie';
import { liftingCervicoFacial } from './lifting-cervico-facial';
import { otoplastie } from './otoplastie';
import { genioplastie } from './genioplastie';
import { lipofillingVisage } from './lipofilling-visage';
import { reductionMammaire } from './reduction-mammaire';
import { liftingSeins } from './lifting-seins';
import { lipofillingMammaire } from './lipofilling-mammaire';
import { abdominoplastie } from './abdominoplastie';
import { bbl } from './bbl';
import { mommyMakeover } from './mommy-makeover';
import { liftingBras } from './lifting-bras';
import { liftingCuisses } from './lifting-cuisses';
import { bypassGastrique } from './bypass-gastrique';
import { anneauGastrique } from './anneau-gastrique';
import { greffeDhi } from './greffe-dhi';
import { greffeBarbe } from './greffe-barbe';
import { implantsDentaires } from './implants-dentaires';
import { couronnes } from './couronnes';
import { blanchiment } from './blanchiment';
import { botox } from './botox';
import { acideHyaluronique } from './acide-hyaluronique';
import { mesolift } from './mesolift';
import { peeling } from './peeling';

// =============================================================================
// Interventions Registry
// =============================================================================
// All 30 intervention data files registered.
// =============================================================================

export const INTERVENTIONS: Record<string, InterventionData> = {
  'rhinoplastie': rhinoplastie,
  'sleeve-gastrique': sleeveGastrique,
  'augmentation-mammaire': augmentationMammaire,
  'facettes': facettes,
  'greffe-cheveux': greffeCheveux,
  'liposuccion': liposuccion,
  'blepharoplastie': blepharoplastie,
  'lifting-cervico-facial': liftingCervicoFacial,
  'otoplastie': otoplastie,
  'genioplastie': genioplastie,
  'lipofilling-visage': lipofillingVisage,
  'reduction-mammaire': reductionMammaire,
  'lifting-seins': liftingSeins,
  'lipofilling-mammaire': lipofillingMammaire,
  'abdominoplastie': abdominoplastie,
  'bbl': bbl,
  'mommy-makeover': mommyMakeover,
  'lifting-bras': liftingBras,
  'lifting-cuisses': liftingCuisses,
  'bypass-gastrique': bypassGastrique,
  'anneau-gastrique': anneauGastrique,
  'greffe-dhi': greffeDhi,
  'greffe-barbe': greffeBarbe,
  'implants-dentaires': implantsDentaires,
  'couronnes': couronnes,
  'blanchiment': blanchiment,
  'botox': botox,
  'acide-hyaluronique': acideHyaluronique,
  'mesolift': mesolift,
  'peeling': peeling,
};

/** Get intervention data by slug */
export function getInterventionData(slug: string): InterventionData | undefined {
  return INTERVENTIONS[slug];
}

/** Get all interventions as an ordered array */
export function getAllInterventions(): InterventionData[] {
  return Object.values(INTERVENTIONS);
}

/** Get interventions for a given category */
export function getInterventionsByCategory(categorySlug: string): InterventionData[] {
  return Object.values(INTERVENTIONS).filter(i => i.categorySlug === categorySlug);
}
