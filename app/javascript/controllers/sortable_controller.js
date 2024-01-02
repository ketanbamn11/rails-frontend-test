import { Controller } from "@hotwired/stimulus"
import Sortable from 'sortablejs';
import { put } from '@rails/request.js'



// Connects to data-controller="sortable"
export default class extends Controller {

  static values = { storefrontId: Number };

  connect() {
    const storefrontId = this.element.dataset.storefrontId;

    Sortable.create(this.element,{
      handle: ".handle",
      animation: 150,
      onEnd: (event) => this.onEnd(event, storefrontId)
    });
  }

  onEnd(event,storefrontId){
    put(`/storefronts/${storefrontId}/update_position`,{
      body: JSON.stringify({reasons_attributes:{id: event.item.dataset.sortableId, ordering: event.newIndex+1}})
    })
  }
}
