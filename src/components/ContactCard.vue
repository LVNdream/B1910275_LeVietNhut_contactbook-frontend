<script>
export default {
    props: {
        contact: { type: Object, required: true },
    },
    // mounted() {
    //     console.log(this.contact);
    // }
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{contact.name }}
        </div>
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ contact.email }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ contact.address }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ contact.phone }}
        </div>
    <div class="p-1 d-flex">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <!-- {{ contact.favorite ? ` <i class="fas fa-check"></i>` : `s` }} -->
            <div v-if="contact.favorite == true">
                <i class="fas fa-check"></i>
            </div>
            <div v-else>
                <i class="fas fa-times"></i>
            </div>
            <!-- <i v-if="this.contact.favorite == true" class="fas fa-check"></i>
                <i v-else class="fas fa-times"></i> -->
        </div>
    </div>
</template>