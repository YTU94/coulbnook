<template>
	<div class="row">
		<Row align="middle">
			<Col span="16" offset="4">
				<ul class="">
					<li class="">
						<Col span="12">
							标题-简称
						</Col>
						<Col span="12" style="text-align:right">
							<Button type="warning">警告按钮</Button>
						</Col>
						<Input type="text"></Input>
						<Input >
								<span slot="prepend">http://</span>
								<span slot="append">.com</span>
						</Input>
					</li>
				</ul>
			</Col>
		</Row>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>

</style>
