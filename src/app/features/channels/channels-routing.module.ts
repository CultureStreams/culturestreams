import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelsComponent } from "./components/channels.component";
import { ChannelListComponent } from "./pages/channel-list/channel-list.component";

const channelRoutes: Routes = [
  {
path:  '',
component:  ChannelsComponent,
children: [
        { path:  '', component:  ChannelListComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(channelRoutes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
export const channelsRoutingComponents = [
  ChannelsComponent,
  ChannelListComponent
]
