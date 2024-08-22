import { Component, ComponentRef, inject, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  viewContainerRef = inject(ViewContainerRef);
  async onLoadComponent() {
    this.viewContainerRef.clear();
    const { MessageComponent } = await import('../message/message.component');
    const componentRef = this.viewContainerRef.createComponent(MessageComponent);
    if (componentRef) {
      componentRef.setInput('message', 'this message was set by the dashboard');
    }
  }

  onRemoveComponent() {
    this.viewContainerRef.clear();
  }
}
