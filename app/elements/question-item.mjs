export default function QuestionItem({ html }) {
  return html`
<style>
</style>
<div class="mbs0">
    <slot></slot>
    <jelly-dialog>
        <h2 class="font-bold mbe0 mbs1 text1 text2-lg leading2">Correct</h2>
        <p style="margin:0">On ultrasound, scleral buckles can be identified by the presence of a hypoechoic structure (which may take a circular, elongated or periorbital shape depending on the view used to observe the buckle) that causes an indentation of the globe. The yellow arrow is pointing to an area of hyperreflectivity due to the perpendicularity of the sound waves. It does not represent the buckle. The blue arrow isn’t pointing at any particular structure. The yellow marker isn’t placed over the buckle but rather it’s simply meant to represent the thickness of the posterior ocular coats. Although the green arrow is pointing to an area that is reflecting little to no sound waves, the ocular structures in their entirety are missing. This occurred because the inferior part of the probe wasn’t touching the eye, not because of a scleral buckle.</p>
    </jelly-dialog>
</div>
`
}
