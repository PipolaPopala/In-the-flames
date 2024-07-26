<template>
    <header>
        <p>header adventure</p>
        <div>
            <Link :href="route('home')">Home</Link>
            <Link :href="route('adventure')">Adventure</Link>
        </div>
    </header>

    <main>
        <slot />
    </main>
</template>
