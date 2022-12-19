<template>
  <l-content title="二维码">
    <l-qrcode text="canvas: 111111">
      <template #header>
        <div>头部插槽</div>
      </template>
      <template #footer>
        <div>底部插槽</div>
      </template>
    </l-qrcode>
  </l-content>
</template>
