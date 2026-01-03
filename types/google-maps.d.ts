declare namespace google {
  namespace maps {
    namespace places {
      class Autocomplete {
        constructor(input: HTMLInputElement, opts?: AutocompleteOptions);
        addListener(event: string, handler: () => void): void;
        getPlace(): PlaceResult;
      }

      class PlaceAutocompleteElement extends HTMLElement {
        constructor();
      }

      interface AutocompleteOptions {
        types?: string[];
        componentRestrictions?: ComponentRestrictions;
        fields?: string[];
      }

      interface ComponentRestrictions {
        country: string | string[];
      }

      interface PlaceResult {
        formatted_address?: string;
        address_components?: AddressComponent[];
        geometry?: {
          location: LatLng;
        };
        name?: string;
        place_id?: string;
      }

      interface AddressComponent {
        long_name: string;
        short_name: string;
        types: string[];
      }
    }

    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }
  }
}

interface HTMLElementTagNameMap {
  'gmp-place-autocomplete': google.maps.places.PlaceAutocompleteElement;
}
