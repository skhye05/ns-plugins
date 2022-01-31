/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module tangrainc {
		export module photoeditor {
			export class BuildConfig {
				public static class: java.lang.Class<com.tangrainc.photoeditor.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tangrainc {
		export module photoeditor {
			export class ColorPickerAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.tangrainc.photoeditor.ColorPickerAdapter.ViewHolder> {
				public static class: java.lang.Class<com.tangrainc.photoeditor.ColorPickerAdapter>;
				public onBindViewHolder(param0: com.tangrainc.photoeditor.ColorPickerAdapter.ViewHolder, param1: number): void;
				public setOnColorPickerClickListener(param0: com.tangrainc.photoeditor.ColorPickerAdapter.OnColorPickerClickListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: java.util.List<java.lang.Integer>);
				public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.tangrainc.photoeditor.ColorPickerAdapter.ViewHolder;
				public getItemCount(): number;
			}
			export module ColorPickerAdapter {
				export class OnColorPickerClickListener {
					public static class: java.lang.Class<com.tangrainc.photoeditor.ColorPickerAdapter.OnColorPickerClickListener>;
					/**
					 * Constructs a new instance of the com.tangrainc.photoeditor.ColorPickerAdapter$OnColorPickerClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onColorPickerClickListener(param0: number): void;
					});
					public constructor();
					public onColorPickerClickListener(param0: number): void;
				}
				export class ViewHolder {
					public static class: java.lang.Class<com.tangrainc.photoeditor.ColorPickerAdapter.ViewHolder>;
					public constructor(param0: com.tangrainc.photoeditor.ColorPickerAdapter, param1: globalAndroid.view.View);
				}
			}
		}
	}
}

declare module com {
	export module tangrainc {
		export module photoeditor {
			export class PhotoEditorActivity {
				public static class: java.lang.Class<com.tangrainc.photoeditor.PhotoEditorActivity>;
				public onClick(param0: globalAndroid.view.View): void;
				public onStartViewChangeListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType): void;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onAddViewListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType, param1: number): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRemoveViewListener(param0: number): void;
				public onEditTextChangeListener(param0: string, param1: number): void;
				public onStopViewChangeListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tangrainc {
		export module photoeditor {
			export class UtilFunctions {
				public static class: java.lang.Class<com.tangrainc.photoeditor.UtilFunctions>;
				public static stringIsNotEmpty(param0: string): boolean;
				public constructor();
			}
		}
	}
}

/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module ahmedadeltito {
		export module photoeditorsdk {
			export class BrushDrawingView {
				public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.BrushDrawingView>;
				public setOnPhotoEditorSDKListener(param0: com.ahmedadeltito.photoeditorsdk.OnPhotoEditorSDKListener): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
			}
		}
	}
}

declare module com {
	export module ahmedadeltito {
		export module photoeditorsdk {
			export class BuildConfig {
				public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module ahmedadeltito {
		export module photoeditorsdk {
			export class MultiTouchListener {
				public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.MultiTouchListener>;
				public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public setOnMultiTouchListener(param0: com.ahmedadeltito.photoeditorsdk.MultiTouchListener.OnMultiTouchListener): void;
			}
			export module MultiTouchListener {
				export class OnMultiTouchListener {
					public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.MultiTouchListener.OnMultiTouchListener>;
					/**
					 * Constructs a new instance of the com.ahmedadeltito.photoeditorsdk.MultiTouchListener$OnMultiTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEditTextClickListener(param0: string, param1: number): void;
						onRemoveViewListener(param0: globalAndroid.view.View): void;
					});
					public constructor();
					public onRemoveViewListener(param0: globalAndroid.view.View): void;
					public onEditTextClickListener(param0: string, param1: number): void;
				}
				export class ScaleGestureListener extends com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector.SimpleOnScaleGestureListener {
					public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.MultiTouchListener.ScaleGestureListener>;
					public onScaleEnd(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): void;
					public onScale(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): boolean;
					public onScaleBegin(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): boolean;
				}
				export class TransformInfo {
					public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.MultiTouchListener.TransformInfo>;
				}
			}
		}
	}
}

declare module com {
	export module ahmedadeltito {
		export module photoeditorsdk {
			export class OnPhotoEditorSDKListener {
				public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.OnPhotoEditorSDKListener>;
				/**
				 * Constructs a new instance of the com.ahmedadeltito.photoeditorsdk.OnPhotoEditorSDKListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onEditTextChangeListener(param0: string, param1: number): void;
					onAddViewListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType, param1: number): void;
					onRemoveViewListener(param0: number): void;
					onStartViewChangeListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType): void;
					onStopViewChangeListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType): void;
				});
				public constructor();
				public onStartViewChangeListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType): void;
				public onAddViewListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType, param1: number): void;
				public onRemoveViewListener(param0: number): void;
				public onEditTextChangeListener(param0: string, param1: number): void;
				public onStopViewChangeListener(param0: com.ahmedadeltito.photoeditorsdk.ViewType): void;
			}
		}
	}
}

declare module com {
	export module ahmedadeltito {
		export module photoeditorsdk {
			export class PhotoEditorSDK extends com.ahmedadeltito.photoeditorsdk.MultiTouchListener.OnMultiTouchListener {
				public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.PhotoEditorSDK>;
				public setBrushDrawingMode(param0: boolean): void;
				public setBrushColor(param0: number): void;
				public viewUndo(): void;
				public brushEraser(): void;
				public getBrushSize(): number;
				public getBrushColor(): number;
				public setBrushSize(param0: number): void;
				public getEraserSize(): number;
				public clearBrushAllViews(): void;
				public onRemoveViewListener(param0: globalAndroid.view.View): void;
				public saveImage(param0: string, param1: string): string;
				public setOnPhotoEditorSDKListener(param0: com.ahmedadeltito.photoeditorsdk.OnPhotoEditorSDKListener): void;
				public onEditTextClickListener(param0: string, param1: number): void;
				public addEmoji(param0: string, param1: globalAndroid.graphics.Typeface): void;
				public clearAllViews(): void;
				public setBrushEraserColor(param0: number): void;
				public addImage(param0: globalAndroid.graphics.Bitmap): void;
				public setBrushEraserSize(param0: number): void;
				public addText(param0: string, param1: number): void;
			}
			export module PhotoEditorSDK {
				export class PhotoEditorSDKBuilder {
					public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.PhotoEditorSDK.PhotoEditorSDKBuilder>;
					public constructor(param0: globalAndroid.content.Context);
					public parentView(param0: globalAndroid.widget.RelativeLayout): com.ahmedadeltito.photoeditorsdk.PhotoEditorSDK.PhotoEditorSDKBuilder;
					public childView(param0: globalAndroid.widget.ImageView): com.ahmedadeltito.photoeditorsdk.PhotoEditorSDK.PhotoEditorSDKBuilder;
					public buildPhotoEditorSDK(): com.ahmedadeltito.photoeditorsdk.PhotoEditorSDK;
					public deleteView(param0: globalAndroid.view.View): com.ahmedadeltito.photoeditorsdk.PhotoEditorSDK.PhotoEditorSDKBuilder;
					public brushDrawingView(param0: com.ahmedadeltito.photoeditorsdk.BrushDrawingView): com.ahmedadeltito.photoeditorsdk.PhotoEditorSDK.PhotoEditorSDKBuilder;
				}
			}
		}
	}
}

declare module com {
	export module ahmedadeltito {
		export module photoeditorsdk {
			export class ScaleGestureDetector {
				public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector>;
				public getCurrentSpanX(): number;
				public getCurrentSpanY(): number;
				public getTimeDelta(): number;
				public getScaleFactor(): number;
				public getPreviousSpanX(): number;
				public getPreviousSpanY(): number;
				public getEventTime(): number;
			}
			export module ScaleGestureDetector {
				export class OnScaleGestureListener {
					public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector.OnScaleGestureListener>;
					/**
					 * Constructs a new instance of the com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector$OnScaleGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScale(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): boolean;
						onScaleBegin(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): boolean;
						onScaleEnd(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): void;
					});
					public constructor();
					public onScaleEnd(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): void;
					public onScale(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): boolean;
					public onScaleBegin(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): boolean;
				}
				export class SimpleOnScaleGestureListener extends com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector.OnScaleGestureListener {
					public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector.SimpleOnScaleGestureListener>;
					public onScaleEnd(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): void;
					public onScale(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): boolean;
					public onScaleBegin(param0: globalAndroid.view.View, param1: com.ahmedadeltito.photoeditorsdk.ScaleGestureDetector): boolean;
				}
			}
		}
	}
}

declare module com {
	export module ahmedadeltito {
		export module photoeditorsdk {
			export class Vector2D {
				public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.Vector2D>;
				public constructor(param0: number, param1: number);
				public normalize(): void;
				public static getAngle(param0: com.ahmedadeltito.photoeditorsdk.Vector2D, param1: com.ahmedadeltito.photoeditorsdk.Vector2D): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module ahmedadeltito {
		export module photoeditorsdk {
			export class ViewType {
				public static class: java.lang.Class<com.ahmedadeltito.photoeditorsdk.ViewType>;
				public static BRUSH_DRAWING: com.ahmedadeltito.photoeditorsdk.ViewType;
				public static TEXT: com.ahmedadeltito.photoeditorsdk.ViewType;
				public static IMAGE: com.ahmedadeltito.photoeditorsdk.ViewType;
				public static EMOJI: com.ahmedadeltito.photoeditorsdk.ViewType;
				public static values(): native.Array<com.ahmedadeltito.photoeditorsdk.ViewType>;
				public static valueOf(param0: string): com.ahmedadeltito.photoeditorsdk.ViewType;
			}
		}
	}
}

//Generics information:


